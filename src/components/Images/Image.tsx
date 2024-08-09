type ImageProps = {
    src: string,
    alt: string,
    className: string,
    width?: number,
    height?: number,
    loading?: "lazy" | "eager"
};
export default function Image({src, alt, className, width = 200, height = 200, loading = "lazy"}: ImageProps) {
    return <img src={src} alt={alt} className={className} width={width} height={height} loading={loading}/>
}