import React from 'react';

const ReceiptPrint = ({ posts }) => {
  window.print();
  const currentDateTime = new Date().toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const totalAmount = posts.reduce((total, post) => total + post.price, 0);

  return (
    <>
      <div className="receipt-container w-[600px] bg-white p-5 mx-auto my-5 border border-gray-500">
        <h1 className="text-center text-2xl font-bold">Hóa Đơn</h1>
        <div className="flex justify-between mb-5">
          <div className="font-medium">
            <p>Thời gian: {currentDateTime}</p>
          </div>
          <div className="font-medium">
            <p>Hóa đơn số: 123456</p>
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-500 px-4 py-2 text-left">Tên sản phẩm</th>
              <th className="border-b border-gray-500 px-4 py-2 text-left">Số lượng</th>
              <th className="border-b border-gray-500 px-4 py-2 text-left">Giá</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td className="border-b border-gray-500 px-4 py-2">{post.postItem}</td>
                <td className="border-b border-gray-500 px-4 py-2">1</td>
                <td className="border-b border-gray-500 px-4 py-2">{post.price} VNĐ</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between font-bold mt-5">
          <p>Tổng cộng:</p>
          <p>{totalAmount} VNĐ</p>
        </div>
      </div>
    </>
  );
};

export default ReceiptPrint;
