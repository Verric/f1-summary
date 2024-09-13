import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "@heroicons/react/24/solid"

export function PositionChange({ starting, final }: { starting: string | number; final: string | number }) {
  const change: number = (starting as number) - (final as number)
  if (change < 0) {
    return (
      <>
        <ArrowDownIcon className="size-6 text-red-500" />
        <span>({change})</span>
      </>
    )
  } else if (change === 0) {
    return <MinusIcon className="size-6" />
  } else if (change > 0) {
    return (
      <>
        <ArrowUpIcon className="size-6 text-green-500" />
        <span>(+{change})</span>
      </>
    )
  } else {
    return null
  }
}
