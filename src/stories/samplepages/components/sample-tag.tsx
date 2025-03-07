import { Badge } from "@mantine/core"

export const SampleTagMantine: React.FC = () => {
    return <div>
    <h3>Default Tag</h3>
    <Badge >Info</Badge>
    <h3>Default Tag</h3>
    <Badge >Info</Badge>
    <h3>Big Tag</h3>
    <Badge size="big">Big</Badge>
</div>
}

export const SampleTagUswds: React.FC = () => {
    return (<div>
        <h3>Default Tag</h3>
        <span className="usa-tag">Info</span>
        <h3>Default Tag</h3>
        <span className="usa-tag">Info</span>
        <h3>Big Tag</h3>
        <span className="usa-tag usa-tag--big">Big</span>
    </div>)
}