import CategoryItem from '<test>/components/CategoryItem';
import RootLayout from '<test>/components/Layout/RootLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { BsCpu, BsMotherboard } from 'react-icons/bs';
import { FaCarBattery } from 'react-icons/fa6';
import { GrCloudComputer } from 'react-icons/gr';
import { MdOutlineSdStorage } from 'react-icons/md';
import { TbHeartRateMonitor } from 'react-icons/tb';
import { useSelector } from 'react-redux';

const categories = [
    { name: "CPU", value: "CPU", icon: <BsCpu /> },
    { name: "Motherboard", value: "Motherboard", icon: <BsMotherboard /> },
    { name: "RAM", value: "RAM", icon: <GrCloudComputer /> },
    { name: "Power Supply", value: "Power-Supply-Unit", icon: <FaCarBattery /> },
    { name: "Storage", value: "Storage-Device", icon: <MdOutlineSdStorage /> },
    { name: "Monitor", value: "Monitor", icon: <TbHeartRateMonitor /> },
    { name: "Ohters", value: "Others", icon: <GrCloudComputer /> },
];

export default function PCBuild() {
    const { selectedItems } = useSelector((state) => state.selectComponent);
    const router = useRouter();

    let totalPrice = 0;
    if (selectedItems.length)
        totalPrice = selectedItems.reduce((prev, item) => prev + item.price, 0);

    const onCompleteSubmit = () => {
        toast.success("Congratulations! You have successfully completed your build 🖥️");
        router.push("/");
    };

    return (
        <>
            <Head>
                <title>PC Build</title>
            </Head>
            <div className='min-h-[70vh] px-2 py-5'>
                <div className='md:w-3/4 mx-auto'>
                    <div className='flex justify-between items-center px-3 w-full h-16 bg-slate-300 '>
                        <h2 className='font-bold text-xl'>PC Build</h2>
                    </div>
                    <div className='p-5'>
                        {
                            categories.map(category => <CategoryItem key={category.name} category={category} />)
                        }
                        <div className='mt-4 flex justify-between items-center'>
                            <p className='font-semibold text-xl'>Total Price:</p>
                            <p className='font-bold text-xl'>$ {totalPrice}</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4 mb-8'>
                    <button onClick={onCompleteSubmit} disabled={selectedItems.length < 5} className='btn btn-info btn-wide'>Complete Build</button>
                    {selectedItems.length < 5 && <p className='text-error text-sm'>*Please select at least 6 items</p>}
                </div>
            </div>
        </>
    );
}

PCBuild.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
