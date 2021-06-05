export interface IOutlineButtonProps {
  buttonText: string
}

const OutlineButton = ({ buttonText }: IOutlineButtonProps) => {
  return (
    <button className="px-2 py-1 text-xs tracking-wider uppercase border border-gray-200 rounded hover:bg-gray-700">
      {buttonText}
    </button>
  )
}

export default OutlineButton
