import {useEffect, useState} from "react";
import {FaBars} from "react-icons/fa6";
interface Props {
    title: string;
    btns: {text: string; ruta: string}[];
}

export default function Menu() {
    const infoMenu: Props = {
        title: "zaimoku taller",
        btns: [
            {text: "inicio", ruta: "/"},
            {text: "productos", ruta: "/productos"},
        ],
    };
    const [expand, setExpand] = useState<boolean>(false);
    const [active, setActive] = useState<string>("");

    const activeTitle = () => {
        const title = document.querySelector("title");
        const textTitle = title?.text.toLowerCase();
        const btnActive = infoMenu.btns.filter((data) =>
            textTitle?.includes(data.text)
        );
        setActive(btnActive[0]?.text);
    };
    function handleClickOutside(e: MouseEvent) {
        const header = document.querySelector("header");
        if (header && !header.contains(e.target as Node)) {
            setExpand(false);
        }
    }
    useEffect(() => {
        activeTitle();
        // * Si presiono fuera del header se cierra el menu
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <nav
            className={`flex flex-col md:flex-row justify-between md:items-center gap-2 transition`}
        >
            <div className="flex justify-between items-center gap-2">
                <span className="capitalize">{infoMenu.title}</span>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setExpand(!expand);
                    }}
                    className="text-xl md:hidden hover:scale-125 transition hover:text-orange-500"
                >
                    <FaBars />
                </button>
            </div>
            <div className={`${expand ? "" : "hidden"} md:block`}>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 gap-x-5">
                    {infoMenu.btns.map(({text, ruta}) => (
                        <a
                            className={`w-max rounded-full capitalize hover:scale-125 hover:text-orange-500 transition ${
                                active === text
                                    ? "text-orange-500 scale-125 translate-x-1 md:translate-x-0"
                                    : null
                            }`}
                            onClick={() => setActive(text)}
                            key={text}
                            href={ruta}
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
