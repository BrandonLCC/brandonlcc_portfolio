
function Divider2() {
    return (
    
<div className="divider-decoracion pt-50 pb-30">
  <svg
    className="svg-editable w-full h-24"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradiente-svg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>

    <path
      d="
        M0 10
        H100
        L200 30
        H300
        L400 50
        H600
        L700 30
        H800
        L900 10
        H1000
      "
      fill="none"
      stroke="url(#gradiente-svg)"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
       
</div>
    )

}

export default Divider2;