import Container from "./Container";

export default function Header() {
   return (
      <header className="bg-slate-800 text-white">
         <Container className="py-4">
            <div className="flex items-center gap-1">
               <div className="border text-[3rem] flex items-center justify-center w-[60px] h-[60px]">
                  R
               </div>
               <div className="text-3xl">Yahyobek</div>
            </div>
         </Container>
      </header>
   );
}
