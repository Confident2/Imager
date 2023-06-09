import Head from "next/head";
import unsplash from "./api/unsplash";
import { Inter } from "next/font/google";
import { Header } from "@/component/header";
import { SearchBar } from "@/component/SearchBar";
import InputForm from "@/component/InputForm";
import { Component } from "react";
import ImageDisplay from "@/component/ImageDisplay"; // Import ImageDisplay component
import imageData from "../data/imageData.json"; // Import imageData from data file

const inter = Inter({ subsets: ["latin"] });

class Home extends Component {
  state = {
    images: [],
    showImageDisplay: true,
    showHeader: true,
  };

  _onSearchSubmit = async (term) => {
    this.setState({ showImageDisplay: false, showHeader: false });

    const response = await unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  get onSearchSubmit() {
    return this._onSearchSubmit;
  }

  set onSearchSubmit(value) {
    this._onSearchSubmit = value;
  }

  render() {
    const { images, showImageDisplay, showHeader } = this.state;

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {showHeader && (
          <SearchBar onSubmit={this.onSearchSubmit}>
            <InputForm onSubmit={this.onSearchSubmit} />
          </SearchBar>
        )}

        {/* Render ImageDisplay component */}
        {showImageDisplay && <ImageDisplay imageData={imageData} />}
      </>
    );
  }
}

export default Home;
