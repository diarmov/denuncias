import { Spinner } from 'flowbite-react'
export const Loading = () => {
  return (
    <div className='absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2, bg-transparent z-100'>
      <Spinner
        aria-label="cargardo"
        color="info"
        size="xl"
      />
    </div>
  )
}
