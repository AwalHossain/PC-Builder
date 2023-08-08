import { FaDeleteLeft, FaPencil } from "react-icons/fa6";
import { BsArrowReturnRight } from "react-icons/bs";
// import { useAppSelector } from "../../redux/hook";
// import toast from "react-hot-toast";
import { useEffect, useState } from "react";
// import UpdateReviewModal from "./UpdateReviewModal";

export default function Review({ reviewDetails, bookId }) {
    // const { user } = useAppSelector((state) => state.user);
    // const userValidation = user?.email === reviewDetails?.userEmail;

    // const [deleteReview, { isSuccess, isError }] = useDeleteReviewMutation();
    const [updateReviewModal, setUpdateReviewModal] = useState(false);

    // const onDeleteReview = () => {
    //     const payload = {
    //         id: bookId,
    //         email: user?.email,
    //         review: reviewDetails?.review,
    //     };
    //     deleteReview(payload);
    // };

    // useEffect(() => {
    //     if (isSuccess)
    //         toast.success("Successfully deleted the book 📘", { id: "addBook" });
    //     if (isError) toast.error("Failed to delete the book 😔", { id: "error" });
    // }, [isSuccess, isError]);

    return (
        <div className="mt-6">
            <div className="flex justify-between items-center">
                <h4 className="font-bold text-accent text-sm">
                    {/* {reviewDetails?.userEmail} */} Email
                </h4>
                {/* {userValidation && (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setUpdateReviewModal(true)}
                            className="btn btn-sm bg-cyan-700 tooltip"
                            data-tip="Update Review"
                        >
                            <FaPencil />
                        </button>
                        <button
                            onClick={onDeleteReview}
                            className="btn btn-sm bg-red-700 tooltip"
                            data-tip="Delete Review"
                        >
                            <FaDeleteLeft className="" />
                        </button>
                    </div>
                )} */}
            </div>
            <div className="flex gap-1 items-start">
                <BsArrowReturnRight className="text-lg" />
                <p className="">{/* {reviewDetails?.review} */} Hello, is this available?</p>
            </div>
            {/* {updateReviewModal && (
                <UpdateReviewModal
                    setUpdateReviewModal={setUpdateReviewModal}
                    reviewDetails={reviewDetails}
                    bookId={bookId}
                />
            )} */}
        </div>
    );
}
