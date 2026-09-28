import {Construction} from 'lucide-react';

import {Card, Empty} from '../components/ui';

export function ComingSoonPage({title}: {title: string}) {
    return (
        <div className="mx-auto max-w-[1100px] p-6">
            <h1 className="mb-4 text-xl font-semibold text-white">{title}</h1>
            <Card>
                <Empty icon={<Construction className="size-10" />} title="Sección en construcción">
                    Esta opción todavía no tiene contenido.
                </Empty>
            </Card>
        </div>
    );
}
