import Layout from '../../components/layout';

const ids = [
    {
        params: {
            section: 'about'
        }
    },
    {
        params: {
            section: 'experience'
        }
    },
    {
        params: {
            section: 'projects'
        }
    },
    {
        params: {
            section: 'education'
        }
    }
]

export default function Resume({ section }) {
    return (
        <>
            { section }
        </>
    )
}

export async function getStaticPaths() {
    const paths = ids;
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const section = params.section
    return {
        props: {
            section
        }
    }
}