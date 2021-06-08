export interface IEarlyAccessProps {}

const EarlyAccess = ({}: IEarlyAccessProps) => {
  return (
    <div className="p-4 text-sm text-gray-400 border border-gray-400 rounded-md">
      <h3 className="text-lg">This is an Early Access Game</h3>
      <p className="mt-2">
        Early Access games are still under development and may change
        significantly over time. As a result, you may experience unforeseen
        issues or completely new gameplay elements while playing this game.
      </p>
      <p className="mt-2">
        You can play now to experience the game while it's being built or wait
        until it offers a more complete experience.
      </p>
    </div>
  )
}

export default EarlyAccess
