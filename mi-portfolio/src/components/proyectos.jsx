import ejemploProyecto1 from "../assets/img/ejemplo-proyecto1.png";

function Proyectos() {
  return (

    /* MODIFICARLO AL ESTILO DEL PROYECTO, BORDES, ETC */
    <div class="border-personalizado-1  bg-white/0  relative flex flex-col my-6   rounded-xl w-90">
      <div class="relative h-56 m-2.5 overflow-hidden text-white ">
        <img src={ejemploProyecto1} alt="card-image" />
      </div>
      
      <div class="px-4">
        <div class="flex items-center mb-2">
          <h6 class="text-white text-xl font-semibold">
            Proyecto 1
          </h6>

          <div class="flex items-center gap-0 5 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="w-5 h-5 text-yellow-600">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="text-white ml-1.5">5</span>
          </div>
        </div>

        <p class="text-white leading-normal font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni amet iusto architecto dolore porro accusantium explicabo atque, tenetur dolorem quisquam possimus earum veritatis non. Debitis ullam quis vel perferendis.
        </p>
      </div>

      <div class="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
       
        <button class="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>

      </div>

      <div class="px-4 pb-4 pt-0 mt-2">
        <button class="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Ver Proyecto
        </button>
      </div>
    </div>


  );
}
export default Proyectos;
