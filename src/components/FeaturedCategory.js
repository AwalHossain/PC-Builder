import { BsCpu, BsMotherboard } from 'react-icons/bs';
import { FaCarBattery } from 'react-icons/fa6';
import { GrCloudComputer } from 'react-icons/gr';
import { MdOutlineSdStorage } from 'react-icons/md';
import { TbHeartRateMonitor } from 'react-icons/tb';
import CategoryCard from './CategoryCard';

const categories = [
    { name: "CPU", value: "CPU", icon: <BsCpu /> },
    { name: "Motherboard", value: "Motherboard", icon: <BsMotherboard /> },
    { name: "RAM", value: "RAM", icon: <GrCloudComputer /> },
    { name: "Power Supply", value: "Power-Supply-Unit", icon: <FaCarBattery /> },
    { name: "Storage", value: "Storage-Device", icon: <MdOutlineSdStorage /> },
    { name: "Monitor", value: "Monitor", icon: <TbHeartRateMonitor /> },
    { name: "Ohters", value: "Others", icon: <GrCloudComputer /> },
]

export default function FeaturedCategory() {
    return (
        <div className='section_main'>
            <h1 className='section_title'>Featured Category</h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                {
                    categories.map(category => <CategoryCard key={categories.value} category={category} />)
                }
            </div>
        </div>
    )
}
