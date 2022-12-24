import Interior from "./pics/interior.jpg";

export default function Home() {
  return (
    <div className="container">
      <div className="banner">
        <img src={Interior} alt="Our interior" />
      </div>
      <div className="about-us">
        <h3>Who are we?</h3>
        <p>
          We're the world's leading babershop when it comes to styles, cuts,
          shaves, and so much more. Never again will you have to watch in
          silence as some dude chops off hair you spent months or years even
          growing, only to give a teary-eyed thumbs up when asked "You like ya
          cut, G?".
        </p>
      </div>
      <div className="services">
        <div className="serv1">
          <img src="" alt="" />
          <p>
            Expect nothing but the most loyal barbers on the planet. Never again
            do you have to risk trying out a new barber only to consider living
            on after a terrible haircut. Once you pick a barber, they make it
            their life goal to center their world around your appointments. They
            will always be on call, and never failing to give you a fire cut.
            You'd cheat on your girl before you choose to cheat on your barber.
          </p>
        </div>
        <div className="serv2">
          <img src="" alt="" />
          <p>
            Here at Razors Edge you're body isn't treated like a temple, but a
            superdome. Nothing but the best of the best, state of the art
            products are used on your body. From shaving creams organically
            sourced from soft af sheep, to combs made from vibranium, you get
            nothing less than the best.
          </p>
        </div>
        <div className="serv3"></div>
      </div>
    </div>
  );
}
