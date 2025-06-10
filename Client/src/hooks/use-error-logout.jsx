import { useDispatch } from "react-redux";
import { Toaster, toast } from 'sonner';
import { setUserLogout } from "@/redux/slices/authSlice";

const useErrorLogout = () => {
  const dispatch = useDispatch();
  

  const handleErrorLogout = (error, otherTitle = "Error occured") => {
    if (error.response.status === 401) {
      dispatch(setUserLogout());
       toast.success({
        title: "Session expired",
        description: "Please login again to continue",
      });
      
      
    } else {
        toast.error({
            title: otherTitle,
            description: error.response.data.message,
          });
      
    }
  };

  return { handleErrorLogout };
};

export default useErrorLogout;
