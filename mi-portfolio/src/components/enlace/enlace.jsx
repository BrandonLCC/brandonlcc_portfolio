import "./enlace.css";

function Enlace({ children, variant = "primary" , className = "", ...props }) {

  return (
    <a
      {...props}
     /**className={`px-6 py-3  transition ${styles[variant]} ${props.className ?? ""}`}*/
    className={`enlace ${variant} px-6 py-3 rounded-sm ${className}`}

    >
      {children}
    </a>
  );
}

export default Enlace;