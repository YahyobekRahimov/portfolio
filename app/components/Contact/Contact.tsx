import Container from "../../components/Container";

export default function Contact() {
  return (
    <Container className="mt-40 pb-40">
      <ul className="flex flex-col gap-2 md:text-[1.5rem] text-[0.8rem] lg:text-[1.6rem]">
        <li>
          Phone Number:{" "}
          <a
            className="underline hover:text-blue-600"
            href="tel:998911228229"
          >
            +998 (91) 122-8229
          </a>
        </li>
        <li>
          Telegram username:{" "}
          <a
            className="underline hover:text-blue-600"
            href="https://t.me/YahyobekRahimov"
          >
            @YahyobekRahimov
          </a>
        </li>
        <li>
          Email:{" "}
          <a
            className="underline hover:text-blue-600"
            href="mail:yahyobek.rahimov.developer@gmail.com"
          >
            yahyobek.rahimov.developer@gmail.com
          </a>
        </li>
      </ul>
    </Container>
  );
}
