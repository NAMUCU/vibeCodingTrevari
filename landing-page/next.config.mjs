/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 HTML로 추출하여 깃허브 배포 가능하게 함
  basePath: '/vibeCodingTrevari', // 저장소 이름에 맞춰 경로 지정 (디자인 깨짐 방지)
  images: {
    unoptimized: true // 깃허브 배포 시 이미지 최적화 오류 방지
  }
};

export default nextConfig;

