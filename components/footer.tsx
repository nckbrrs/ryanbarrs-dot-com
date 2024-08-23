import { Col, Row } from './base';
import 'twin.macro'

const Footer: React.FC = () => {
    return (
        <Col tw="pb-4 pt-6 sm:pb-10 md:pb-12 lg:pb-20 justify-end items-end">
            <Row>
            <p tw="text-[0.75em] font-mono tracking-tightest text-bone opacity-50">made with ❤️ by&nbsp;</p>
            <a tw="text-[0.75em] font-mono tracking-tightest text-bone opacity-50 hover:opacity-100 duration-100" href="https://nickbarrs.com/" target="_blank" rel="noopener noreferrer">Nick Barrs</a>
            </Row>
        </Col>
    )
}

export default Footer;