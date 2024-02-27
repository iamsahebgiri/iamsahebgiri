const colors = [
 'bg-purple-100/80 text-purple-800',
 'bg-red-100/80 text-red-800',
 'bg-cyan-100/80 text-cyan-800',
 'bg-amber-100/80 text-amber-800',
 'bg-yellow-100/80 text-yellow-800',
 'bg-green-100/80 text-green-800',
 'bg-blue-100/80 text-blue-800',
 'bg-gray-100/80 text-gray-800',
 'bg-indigo-100/80 text-indigo-800',
 'bg-orange-100/80 text-orange-800',
 'bg-lime-100/80 text-lime-800',
];

export function getColor(tag?: string) {
    function hashCode(str: string) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    }
    if (tag) {
        const hash = hashCode(tag);
        const index = hash % colors.length;
        return colors[Math.abs(index)];
    } else {
        return colors[Math.floor(Math.random() * colors.length)];
    }
}