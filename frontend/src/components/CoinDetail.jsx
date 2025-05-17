import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CoinDetail = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [priceData, setPriceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                // Fetch coin details
                const coinResponse = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${id}`
                );
                setCoin(coinResponse.data);

                // Fetch price history for the last 30 days
                const priceResponse = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`
                );
                const prices = priceResponse.data.prices.map(price => ({
                    date: new Date(price[0]).toLocaleDateString(),
                    price: price[1],
                }));
                setPriceData(prices);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi lấy chi tiết coin:', error);
                setLoading(false);
            }
        };
        fetchCoin();
    }, [id]);

    if (loading) return <div>Đang tải...</div>;
    if (!coin) return <div>Không tìm thấy coin</div>;

    // Chart data configuration
    const chartData = {
        labels: priceData.map(data => data.date),
        datasets: [
            {
                label: 'Giá USD',
                data: priceData.map(data => data.price),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Lịch Sử Giá ${coin.name} (30 Ngày Qua)`,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Ngày',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Giá (USD)',
                },
            },
        },
    };

    return (
        <div className="coin-detail">
            <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
            <img src={coin.image.large} alt={coin.name} width="100" />
            <p>Giá hiện tại: ${coin.market_data.current_price.usd.toFixed(2)}</p>
            <p>Vốn hóa thị trường: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
            <p>Biến động 24h: {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
            <p>
                Website: <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer">
                {coin.links.homepage[0]}
            </a>
            </p>
            <div className="price-chart">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default CoinDetail;