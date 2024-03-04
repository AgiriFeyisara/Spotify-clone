import spotifyWhite from "../assets/images/spotify-white.png";
import spotifyBlack from "../assets/images/spotify-black.png";

// export function Logo() {
//   return (
//     <a href="#/dashboard">
//       <img src={spotifyWhite} />
//     </a>
//   );
// }
export function Logo(props) {
  if (props.useWhite) {
    return (
      <a href="#/dashboard">
        <img src={spotifyWhite} />
      </a>
    );
  } else {
    return (
      <a href="#/dashboard">
        <img src={spotifyBlack} />
      </a>
    );
  }
}
