import BgVideo from "../../../../public/assets/videos/pearTreeBlossom.mp4";


function Header() {
  return (
    <header className="w-100 mainHeader">
        <video className="w-100 headerVideo"  src={BgVideo} autoPlay loop muted/>
    </header>
  )
}

export default Header