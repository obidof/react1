import toast from "react-hot-toast";
export const useGetNotify = () => {
    const notify = (statuss, msg) => {
        if (statuss == 'ok') {
            toast.success(msg || "yaxshi xabar")
        }
        else{
            toast.error(msg || "yomon xabar")
        }
    };
    return notify;
};