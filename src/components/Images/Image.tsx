type ImageProps = {
    src: string,
    alt: string,
    className: string,
    width?: number,
    height?: number,
    loading?: "lazy" | "eager"
};
export default function Image({src, alt, className, loading = "lazy"}: ImageProps) {
    return <img src={src} alt={alt} className={className} loading={loading}/>
}