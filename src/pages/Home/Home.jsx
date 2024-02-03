import Container from "../../components/Container";
import Header from "../../components/Header";

export default function Home() {
   return (
      <>
         <Header />
         <main className="bg-slate-800 min-h-screen text-white">
            <Container></Container>
         </main>
      </>
   );
}
