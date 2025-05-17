import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
                );
                setCoins(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách coin:', {
                    message: error.message,
                    status: error.response?.status,
                    data: error.response?.data,
                });
                setError('Không thể tải danh sách coin. Vui lòng thử lại sau.');
                setLoading(false);
            }
        };
        fetchCoins();
    }, []);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="coin-list">
            <h2>Các Đồng Tiền Mã Hóa Hàng Đầu</h2>
            <table>
                <thead>
                <tr>
                    <th>Xếp hạng</th>
                    <th>Tên</th>
                    <th>Giá (USD)</th>
                    <th>Vốn hóa thị trường</th>
                    <th>Biến động 24h</th>
                </tr>
                </thead>
                <tbody>
                {coins.map((coin, index) => (
                    <tr key={coin.id}>
                        <td>{index + 1}</td>
                        <td>
                            <Link to={`/coin/${coin.id}`}>
                                <img src={coin.image} alt={coin.name} width="20" /> {coin.name}
                            </Link>
                        </td>
                        <td>${coin.current_price.toFixed(2)}</td>
                        <td>${coin.market_cap.toLocaleString()}</td>
                        <td className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoinList;