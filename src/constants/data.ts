import { Feature, Service } from "@/interfaces";
import {
  Brush,
  DraftingCompass,
  Image,
  MicVocal,
  PersonStanding,
  ShipWheel,
  Sparkles,
  Video
} from "lucide-react";

import { MdHomeFilled } from "react-icons/md";
import { FaBell, FaRegImage } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { TbTestPipe } from "react-icons/tb";
import { TfiBrush, TfiRocket } from "react-icons/tfi";
import { FaFolder } from "react-icons/fa6";
import { TiImage } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";



export const ourFeatures: Feature[] = [
  {
    icon: Image,
    isNew: true,
    title: "Image",
    desc: "Generate images with custom styles in Flux and Ideogram",
    bgColor: "bg-linear-to-b from-[#4C1C00] to-[#F6F6F3]",
    iconColor: "text-pink-600",
  },
  {
    icon: Video,
    isNew: false,
    title: "Video",
    desc: "Generate videos with Halioan, Pica, Runway, Luma and More",
    bgColor: "bg-[#FFBE0A]",
    iconColor: "text-blue-600",
  },
  {
    icon: Brush,
    isNew: false,
    title: "Realtime",
    desc: "Realtime AI Rendering on a canvas. instant feedback",
    bgColor: "from-[#BCE4F1] to-[#FFFFFF] bg-linear-to-b",
    iconColor: "text-green-600",
  },
  {
    icon: Sparkles,
    isNew: true,
    title: "Enhancer",
    desc: "Upscale and enhances images and videos up to 22k",
    bgColor: "from-[#4C1C00] bg-linear-to-b to-[#FFFFFF]",
    iconColor: "text-yellow-600",
  },
  {
    icon: DraftingCompass,
    isNew: true,
    title: "Edit",
    desc: "Add Objects, change styles, or suspend photos and generations.",
    bgColor: "from-[#5D3B8B] to-[#FFFFFF] bg-linear-to-b",
    iconColor: "text-purple-600",
  },
  {
    icon: MicVocal,
    isNew: true,
    title: "Video Lipsync",
    desc: "Lip sync any video to any audio",
    bgColor: "from-[#375A55] to-[#4E878A] bg-linear-to-b",
    iconColor: "text-red-600",
  },
  {
    icon: PersonStanding,
    isNew: true,
    title: "Motion Transfer",
    desc: "Transfer motion to images and animate characters.",
    bgColor: "bg-black",
    iconColor: "text-black",
  },
  {
    icon: ShipWheel,
    isNew: false,
    title: "Train",
    desc: "Teach Keras to replicate your styles, products, or characters.",
    bgColor: "bg-[#CB9B80]",
    iconColor: "text-indigo-600",
  },
];

//  

export const services: Service[] = [
  {
    title: "Motion Transfer",
    subtitle: "Introducing Motion Transfer",
    desc: "Bring motion into your characters effortlessly. Upload any static image, record a short video of yourself or another subject, and see your character replicate expressions, gestures, and movements. Powered by Runway Act 2, this tool makes animation intuitive and fast for content creators and game developers.",
    image: "/nature.png",
    buttonText: "Try Now"
  },
  {
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image Generation",
    desc: "Generate highly detailed and realistic images from text prompts using the WAN 2.2 model. This model excels in prompt adherence, photorealistic textures, and intricate details, making it ideal for concept art, marketing visuals, and creative design exploration.",
    image: "/video.png",
    buttonText: "Try WAN 2.2"
  },
  {
    title: "Image Upscaler",
    subtitle: "Upscale Images Instantly",
    desc: "Enhance the resolution of your images without losing quality. Our upscaler uses AI to preserve fine details, textures, and edges, turning low-resolution images into print-ready assets or high-quality digital visuals. Perfect for photographers, designers, and social media content creators.",
    image: "/people.png",
  },
  {
    title: "Video Enhancer",
    subtitle: "Enhance Videos",
    desc: "Automatically improve video quality with AI-powered enhancement. Reduce noise, sharpen details, enhance colors, and stabilize shaky footage to produce professional-grade videos. Ideal for content creators, filmmakers, and anyone looking to upgrade existing video assets.",
    image: "/make-video.jpg",
    buttonText: "Start Today"
  },
  {
    title: "Background Remover",
    subtitle: "Remove Backgrounds",
    desc: "Easily remove backgrounds from images with precise edge detection. This tool works perfectly for product photography, portraits, or any creative project requiring a transparent or new background. Export in multiple formats for use in presentations, e-commerce, or social media.",
    image: "/background-remover.jpg",
  },
  {
    title: "Text-to-Image",
    subtitle: "Generate Images from Text",
    desc: "Turn text prompts into high-quality images instantly. Specify style, perspective, lighting, and mood to create illustrations, digital art, or marketing visuals. Ideal for artists, designers, and marketers looking for quick visual generation based on ideas.",
    image: "/text-image.png",
    buttonText: "Start Now"
  },
  {
    title: "Video Lipsync",
    subtitle: "Sync Audio to Video",
    desc: "Automatically sync any voiceover or audio track to a video, aligning lip movements perfectly. This tool is great for dubbing, animation, and content localization, reducing manual effort and producing professional results quickly.",
    image: "/ai-1.jpg",
    buttonText: "Make Video"
  },
  {
    title: "Style Transfer",
    subtitle: "Apply Artistic Styles",
    desc: "Transform photos or videos by applying the style of famous artists, paintings, or custom designs. This AI-powered tool allows you to experiment with unique visuals for creative projects, marketing materials, or social media content, keeping details intact while changing the aesthetic.",
    image: "/transfer.jpg",
  },
  {
    title: "3D Object Generator",
    subtitle: "Generate 3D Models",
    desc: "Create realistic 3D models from 2D images or sketches for use in games, VR/AR, animations, and 3D printing. The generator produces clean geometry and textures, enabling fast prototyping and creative exploration without extensive 3D modeling skills.",
    image: "/3d.jpg",
    buttonText: "Start Now"
  },
];

export const navLinks = [
  { icon: MdHomeFilled, label: "Home" },
  { icon: FaRegImage, label: "Generate Image" },
  { icon: IoIosVideocam, label: "Generate video" },
  { icon: TbTestPipe, label: "Experiment LLM" },
  { icon: TfiBrush, label: "Paint Character" },
  { icon: TfiRocket, label: "Explore Maggic" },
  { icon: FaFolder, label: "Explore Projects" },
];

export const supportLinks = [
  { label: "Gallery", icon: TiImage },
  { label: "Support", icon: BiSupport },
  { icon: FaBell },
];
