// components/ImageGallery.tsx
export default function ImageGallery() {
    return (
        <div style={{ display: 'flex', gap: '12px' }}>
            <img
                src="https://pic.rtbcdn.ru/user/2026-02-09/c8/fc/c8fc90c83dcaa0d4dc493d8313afb72d.jpg"
                alt="Котик"
                width={200}
                height={150}
            />
            <img
                src="https://i.pinimg.com/736x/17/df/cf/17dfcf2a1bda1100434d41eae31085e3.jpg"
                alt="Собачка"
                width={200}
                height={150}
            />
            <img
                src="https://media.istockphoto.com/id/1345682633/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BC%D0%B8%D0%BB%D0%BE%D0%B3%D0%BE-%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D1%85%D0%BE%D1%80%D1%8C%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=gcSagxYHeGaRXXQw756wouEmLZUgS1CYgsgNJAZCC-k="
                alt="Хорек"
                width={200}
                height={150}
            />
        </div>
    );
}