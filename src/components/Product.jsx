import React from 'react'

const datas = [
    { barang: "Kopi Sembalun", imgUrl: "https://th.bing.com/th/id/OIP.hg6V4eWrvsSPPAwlzgft2gHaEK?pid=ImgDet&rs=1", price: "14.000.00" },
    { barang: "Kopi Senaru", imgUrl: "https://th.bing.com/th/id/OIP.op2eh_H0ZgX5jUjknQ4SMAHaEc?pid=ImgDet&rs=1", price: "10.000.00" },
    { barang: "Kopi Belantih", imgUrl: "https://balebengong.id/wp-content/uploads/2015/08/kopi-kintamani-jajabali-e1439535457753.jpg", price: "10.000.00" },
    { barang: "Kopi Mantang", imgUrl: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/4.-Kopi-Kintamani-Bali-sumber-gambar-Pixabay.jpg", price: "10.000.00" },
    { barang: "Kopi Java Ijen Raung", imgUrl: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/5.-Kopi-Java-Ijen-Raung-sumber-gambar-Pixabay.jpg", price: "10.000.00" },
    { barang: "Kopi Flores Bajawa", imgUrl: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/6.-Kopi-Flores-Bajawa-sumber-gambar-Pixabay.jpg", price: "10.000.00" },
    { barang: "Kopi Gangga", imgUrl: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/7.-Kopi-Sidikalang-sumber-gambar-Pixabay.jpg", price: "10.000.00" },
    { barang: "Kopi Sidikalang", imgUrl: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/8.-Kopi-Papua-sumber-gambar-Pixabay.jpg", price: "10.000.00" },
    { barang: "Kopi Temanggung", imgUrl: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/9.-Kopi-Temanggung-sumber-gambar-Pixabay.jpg", price: "10.000.00" },
    { barang: "Kopi Luwak", imgUrl: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/10.-Kopi-luwak-sumber-gambar-Coffindo-1.jpeg", price: "10.000.00" },
]

export const Product = () => {
    return (
        <div className='min-h-screen w-full bg-slate-100' id='product'>
            <div className='bg-slate-100 text-center py-[10vh] text-black'>
                <div className='container mx-auto px-6'>
                    <p className='text-xl font-semibold text-black'>Produk Produk Kami</p>
                    <p>Apakah Anda mencari sarung yang tidak hanya memberikan kenyamanan maksimal, tetapi juga tampilan yang elegan? Sarung Wadimor adalah pilihan sempurna untuk Anda! Dibuat dengan keahlian tinggi dan menggunakan bahan berkualitas, sarung Wadimor adalah kombinasi sempurna antara gaya dan kenyamanan.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                {datas.map((res, key) => {
                    return (
                        <div key={key} className='bg-white max-h-[700px] w-[300px] mx-auto mb-5 text-center'>
                            <div>
                                <img src={res.imgUrl} alt="" className='h-[200px]' />
                            </div>
                            <div className='text-center p-4'>
                                <p><b>{res.barang}</b></p>
                                <p>Harga: {res.price}</p>
                            </div>
                            <button className='bg-slate-700 hover:bg-slate-500 duration-200 text-white w-[75%] py-3 my-5 rounded-md'>Beli Sekarang</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
