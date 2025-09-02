import { Toaster as HotToaster, toast } from "react-hot-toast"

const Toaster = () => {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      }}
    />
  )
}

export { Toaster, toast }
