import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
};

function DestForm() {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const [imgSrc, setImgSrc] = useState("");
    const [uploadMode, setUploadMode] = useState("Link"); // "Link" or "Upload"

    const formStyle = {
        width: "70%",
        aspectRatio: "1/1",
        marginLeft: "auto",
        marginRight: "auto",
    };

    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImgSrc(event.target.result); // Save Base64 string
            };
            reader.readAsDataURL(file);
        }
    }

    function handleImageLinkChange(e) {
        setImgSrc(e.target.value); // Save image URL
    }

    return (
        <div style={containerStyle}>
            <form
                style={formStyle}
                onSubmit={handleSubmit((data) => {
                    const existingCards = JSON.parse(localStorage.getItem("cards")) || [];
                    const newCard = { title: data.title, imgSrc, alertTag: "New!" }; // Use imgSrc from state
                    localStorage.setItem("cards", JSON.stringify([...existingCards, newCard]));

                    const existingDestinations = JSON.parse(localStorage.getItem("destinations")) || [];
                    const newDestination = { name: data.title, brief: data.brief };
                    localStorage.setItem("destinations", JSON.stringify([...existingDestinations, newDestination]));

                    location.href = "/TravelList";
                })}
            >
                <div style={{ display: "flex", gap: "1em" }}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            style={{ height: "2em", width: "9em", fontSize: "1em" }}
                            className="form-control"
                            id="title"
                            {...register("title", { required: true })}
                        />
                        {errors.title && <p className="text-danger">Title is required</p>}
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <div style={{ display: "flex", gap: "1em" }}>
                            {uploadMode === "Link" && (
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Image URL"
                                    onChange={handleImageLinkChange}
                                />
                            )}
                            {uploadMode === "Upload" && (
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            )}
                            <select
                                onChange={(e) => setUploadMode(e.target.value)}
                                value={uploadMode}
                            >
                                <option value="Link">Link</option>
                                <option value="Upload">Upload</option>
                            </select>
                        </div>
                    </div>
                    <div id="preview" style={{ paddingTop: "25px" }}>
                        {imgSrc && (
                            <img
                                src={imgSrc}
                                alt="Preview"
                                style={{ width: "15em", height: "15em", borderRadius: "10px" }}
                            />
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="brief">Brief</label>
                    <input
                        type="text"
                        className="form-control"
                        id="brief"
                        {...register("brief", { required: true })}
                    />
                    {errors.brief && <p className="text-danger">Brief is required</p>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default DestForm;
