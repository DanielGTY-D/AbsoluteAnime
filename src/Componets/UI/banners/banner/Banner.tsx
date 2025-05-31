import "./_Banner.scss";
import banner from "../../../../assets/img/banner.png";
import bannerWithoutLetters from "../../../../assets/img/banner-without-letters.png";
import bannerGirlLeft from "../../../../assets/img/banner-left.jpg";
import bannerGrilRight from "../../../../assets/img/banner-right.jpg";

type BannerType = "type_1" | "type_2" | "type_3" | "type_4";

interface BannerProps {
	bannerType?: BannerType;
}
const bannerObjct: Record<BannerType, string> = {
	type_1: banner,
	type_2: bannerWithoutLetters,
	type_3: bannerGirlLeft,
	type_4: bannerGrilRight,
};

const bannerText = {
  type_1: "",
  type_2: "",
  type_3: "✨ Hi there, welcome to our page! 🌸 Here you can find your favorite anime,as well as discover new ones—whether you love magic 🪄, adventure 🗺️, ortear-jerking romance 💕 that makes you shed those crocodile tears 🐊. Don’tbe afraid—dive in and explore new horizons! 🚀",
  type_4: "🌟 Are you ready to discover what we have to offer? 📖 Please note that this is not a page to watch anime—we simply provide a service so you can keep track of the anime you’ve seen, want to see, or are currently watching 📺. This way, you can have your own list and never forget them! 📝 So, if you like what we’ve got for you, please leave a comment 💬 or drop us a message via the link below to share your suggestion. ✉️"
}

const Banner = ({bannerType = "type_1" }: BannerProps) => {
  
	return (
		<div className="banner">
			<img
				src={bannerObjct[bannerType]}
				alt="section banner"
				className="banner__img"
			/>

			<div className={`banner__content ${bannerType === "type_4" && "banner__content--left"}`}>
				<h2 className="banner__caption">
          {
            bannerText[bannerType]
          }
        </h2>
			</div>
		</div>
	);
};

export default Banner;
