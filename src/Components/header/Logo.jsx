import HeaserLogo from "../../assets/logo.svg";

export default function Logo() {
    return (
        <>
            <a href="./index.html">
                <img className="h-9" src={HeaserLogo} alt="Weather App" />
            </a>
        </>
    );
}
