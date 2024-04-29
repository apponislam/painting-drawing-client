import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyArtCard from "./MyArtCard";
import { Helmet } from "react-helmet-async";

const MyArt = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const fetchlink = `http://localhost:5000/allart/email/${email}`;

    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);

    useEffect(() => {
        fetch(fetchlink)
            .then((response) => response.json())
            .then((json) => {
                setDatas(json);
                setDatas2(json);
            });
    }, [fetchlink]);

    const [selectedOption, setSelectedOption] = useState("Not Selected");
    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        const filteredYesData = datas.filter((item) => item.customization === "yes");
        const filteredNoData = datas.filter((item) => item.customization === "no");
        if (selectedOption == "yes") {
            console.log("first selected option");
            setDatas2([...filteredYesData, ...filteredNoData]);
        } else if (selectedOption == "no") {
            console.log("seceond selected option");
            setDatas2([...filteredNoData, ...filteredYesData]);
        } else {
            console.log("Default selected option");
            setDatas2(datas);
        }
    }, [selectedOption, datas]);

    // const filteredYesData = selectedOption ? datas.filter((item) => item.customization === "yes") : [];
    // const filteredNoData = selectedOption ? datas.filter((item) => item.customization === "no") : [];
    // setDatas2([...filteredYesData, ...filteredNoData]);
    // console.log(filteredData);
    // setDatas2(filteredData);

    // console.log(datas);
    // console.log(datas2);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>My Art & Craft || Appon Painting & Drawing</title>
            </Helmet>
            <div className="my-20">
                <h1 className="text-center text-3xl font-bold uppercase mb-8">My Art and Carft : {datas2.length}</h1>

                <div className="mx-4 mb-5 flex items-center justify-center">
                    <select className="select select-bordered w-full max-w-xs" value={selectedOption} onChange={handleChange}>
                        <option value="">Customization</option>
                        <option>yes</option>
                        <option>no</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 mx-3 xl:mx-0">
                    {datas2.map((art) => (
                        <MyArtCard key={art._id} art={art} setData={setDatas} datas={datas} setDatas2={setDatas2} setDatas={setDatas}></MyArtCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyArt;
