import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
    const [countrySearch, setCountrySearch] = useState("");
    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");

    const countryDataHandler = async () => {
        if (!countrySearch.trim()) {
            setCountryData(null);
            setText("Please enter a country name.");
            return;
        }

        setLoading(true);
        setText("Loading...");

        setTimeout(async () => {
            await axios
                .get(`https://restcountries.com/v3.1/name/${countrySearch}?fullText=true`)
                .then((res) => {
                    console.log(res);

                    if (res.status === 200) {
                        setCountryData(res.data);
                        setText("");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    if (err.response?.status === 404) {
                        setText("Country Not Found");
                        setCountryData(null);
                    } else {
                        setText("An error occurred. Please try again.");
                        setCountryData(null);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1500);
    };

    return (
        <>
            <div className="countryBox">
                <div className="row gap-lg-0 gap-md-0 gap-sm-0 gap-3">
                    <div className="col-lg-8 col-md-8 col-sm-7 col-12">
                        <input type="text" onChange={(e) => setCountrySearch(e.target.value)} className="form-control" placeholder="Enter Country Name"></input>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 col-12">
                        <button onClick={countryDataHandler}>
                            <i className="bx bx-search-alt"></i> Search
                        </button>
                    </div>
                </div>
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <p className="m-0">{text}</p>
                    </div>
                ) : countryData ? (
                    countryData.map((val, ind) => {
                        const currencyCode = Object.keys(val.currencies)[0];
                        const currencyName = val.currencies[currencyCode].name;
                        const currencySymbol = val.currencies[currencyCode].symbol;
                        return (
                            <div className="responsiveBox" key={ind}>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="infoBox">
                                        <div className="row">
                                            <div className="col-md-5 col-6">
                                                <p>Country Name:</p>
                                            </div>
                                            <div className="col-md-7 col-6">
                                                <span>{val.name.common}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 col-6">
                                                <p>Capital:</p>
                                            </div>
                                            <div className="col-md-7 col-6">
                                                <span>{val.capital.join(", ")}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 col-6">
                                                <p>Region:</p>
                                            </div>
                                            <div className="col-md-7 col-6">
                                                <span>{val.region}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 col-6">
                                                <p>Population:</p>
                                            </div>
                                            <div className="col-md-7 col-6">
                                                <span>{val.population.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 col-6">
                                                <p>Currency:</p>
                                            </div>
                                            <div className="col-md-7 col-6">
                                                <div className="d-flex gap-2">
                                                    <span>{currencyName}</span>
                                                    <span>{currencySymbol}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 col-6">
                                                <p>Languages:</p>
                                            </div>
                                            <div className="col-md-7 col-6">
                                                <div className="languages">
                                                    {Object.values(val.languages).map((languages, ind) => {
                                                        return <span key={ind}>{languages}</span>;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 col-6">
                                                <p>Timezones:</p>
                                            </div>
                                            <div className="col-md-7 col-6">
                                                <div className="timezones">
                                                    {val.timezones.map((val, ind) => {
                                                        return <span key={ind}>{val}</span>;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-center align-items-center">
                                    <div className="countryImgBox">
                                        <img alt={Object.values(val.flags)[2]} src={Object.values(val.flags)[1]}></img>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="d-flex justify-content-center">
                        <p className="m-0">{text}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default App;
