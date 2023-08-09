import { useForm } from "react-hook-form";
// import { useAppSelector } from "../../redux/hook";
// import toast from "react-hot-toast";
import PreviousBtn from "../PreviousBtn";
import Review from "./Review";

export default function Reviews({ id }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    return (
        <div className="mt-10">
            <h4 className="text-lg font-semibold">User Reviews:</h4>
            <div className="bg-slate-300 h-[0.5px]" />
            <div className="mt-3">
                <form /* onSubmit={handleSubmit(onSubmit)} */>
                    <div className="flex gap-3 items-end">
                        <textarea
                            rows={4}
                            placeholder="This book is ....."
                            className="resize-none textarea textarea-primary rounded w-[400px]"
                            {...register("review", { required: "Review is required" })}
                        ></textarea>{" "}
                        <button
                            // disabled={userReviewd || !user?.email}
                            className="btn btn-sm btn-primary"
                        >
                            Submit
                        </button>
                    </div>
            
                </form>

                <Review />
                <PreviousBtn />
            </div>
        </div>
    );
}