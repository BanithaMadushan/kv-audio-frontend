export default function ImageSlider(props){
    const images = props.images;
    return(
        <div className="w-full h-full flex flex-col items-center">
            <img src={images[0]} alt="product image" className="w-full h-full object-cover" loading="lazy" />
        </div>
    )
}