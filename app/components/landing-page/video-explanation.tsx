export default function VideoExplanation() {
  return (
    <div className="border rounded-2xl border-border-primary aspect-video flex items-center justify-center my-20">
      <video
        controls
        className="w-full h-full object-cover"
        src="/videos/video-one.mp4"
      ></video>
    </div>
  );
}
