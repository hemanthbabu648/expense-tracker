import { toast, ToastOptions } from 'react-toastify';

export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(`${message}`, {
    position: 'top-center',
    autoClose: 3000,
    type: 'success',
    ...options,
  });
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(`${message}`, {
    position: 'top-center',
    autoClose: 3000,
    type: 'error',
    ...options,
  });
};
