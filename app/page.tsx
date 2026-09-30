// app/page.tsx
import Greeting from '@/components/Greeting';
import TaskList from '@/components/TaskList';
import ActionButton from '@/components/ActionButton';
import ProfileCard from '@/components/ProfileCard';
import ImageGallery from '@/components/ImageGallery';

export default function HomePage() {
    return (
        <main style={{ padding: '24px', fontFamily: 'sans-serif' }}>
            <h1>Задачи на компоненты React</h1>

            <section>
                <h2>1. Приветствие</h2>
                <Greeting />
            </section>

            <section>
                <h2>2. Список задач</h2>
                <TaskList />
            </section>

            <section>
                <h2>3. Кнопка и статическое сообщение</h2>
                <ActionButton />
            </section>

            <section>
                <h2>4. Карточка профиля</h2>
                <ProfileCard />
            </section>

            <section>
                <h2>5. Галерея</h2>
                <ImageGallery />
            </section>
        </main>
    );
}