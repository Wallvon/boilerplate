import RomanNumerals from '../lib/romanNumerals';

export default function Footer() {
    return (
        <>
            <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-xl">
                    © {RomanNumerals(new Date().getFullYear())}
                    {" "}
                    <a href="https://robert-s.dev" target="_blank" rel="noopener noreferrer">Robert S.</a>
                </p>
            </footer>
        </>
    )
}
