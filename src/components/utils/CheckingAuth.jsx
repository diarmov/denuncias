import { Spinner } from 'flowbite-react';

export const CheckingAuth = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', padding: 4}}>
        <div className="flex justify-center items-center mt-52">
            <Spinner aria-label="procesando" size="xl" color="failure"/>
        </div>         
    </div>
  )
}
