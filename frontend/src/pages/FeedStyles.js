import styled from 'styled-components'

export const PostList = styled.section`
    width: 100%;
    max-width: 580px;
    margin: 0 auto;
    padding: 0 30px;

    article {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 30px;
        header {
            padding: 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            .user-info {
                display: flex;
                flex-direction: column;
                span {
                    font-size: 13px;
                }
                span.place {
                    font-size: 13px;
                    color: #666;
                    margin-top: 3px;
                }
            }
            > img {
                width: 100%;
            }
            footer {
                padding: 20px;
                .actions {
                    margin-bottom: 10px;
                    button {
                        background-color: transparent;
                        border: 0;
                        cursor: pointer;
                    }
                    img {
                        height: 20px;
                        margin-right: 10px;
                    }
                }
                p {
                    font-size: 13px;   
                    margin-top: 2px;
                    line-height: 18px;
                    span {
                        color: #0a396c;   
                        display: block;
                    }
                }
            }
        }
    }
`

