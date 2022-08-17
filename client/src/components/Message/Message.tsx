import React, { FunctionComponent, RefObject, useContext } from 'react';
import { UserContext } from 'context/UserContext';
import { Message as MessageType } from 'types/message';

import { getForegroundColorBasedOnBackgroundColor } from 'utils/colors';
import { getMessageTime } from 'utils/format';

import { Author, MainMessageContainer, MessageContent, Time, Wrapper } from './styles';

interface MessageProps {
	message: MessageType;
	lastMessageRef: RefObject<HTMLDivElement> | null;
}

export const Message: FunctionComponent<MessageProps> = ({ message, lastMessageRef }) => {
	const { author, color, text, time } = message;

	const user = useContext(UserContext).user;

	const isOwnMessage = user.username === author;

	return (
		<Wrapper
			ref={lastMessageRef}
			isOwnMessage={isOwnMessage}
		>
			<MainMessageContainer>
				{!isOwnMessage && (
					<Author
						backgroundColor={color}
						foregroundColor={getForegroundColorBasedOnBackgroundColor(color)}
						dangerouslySetInnerHTML={{ __html: `${author}` }}
					/>
				)}
				<MessageContent dangerouslySetInnerHTML={{ __html: `${text}` }} />
				<Time>{getMessageTime(time)}</Time>
			</MainMessageContainer>
		</Wrapper>
	);
};
