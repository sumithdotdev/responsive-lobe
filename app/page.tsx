import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import VideoBody from "@/components/video";

export default function Home() {
  return (
    <div className="w-screen">

      <Navbar />

      <Container>
        <VideoBody />
        <hr className="mt-20 text-gray-700 max-w-7xl w-full" />
        <Footer />
      </Container>

    </div>
  )
}