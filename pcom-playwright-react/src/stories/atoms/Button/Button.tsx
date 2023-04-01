import { ReactNode } from "react"

interface IButtonProps{
  className?: string
  label:string
}

const Button = (props: IButtonProps) => {

  const {
    className = "",
    label
  } = props;

  return (
    <button>
      {label}
    </button>
  )
}

export default Button;