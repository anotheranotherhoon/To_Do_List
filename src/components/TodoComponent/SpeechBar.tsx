import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../../recoil/todoAtom";
import { AiFillCaretRight, AiOutlineRedo} from "react-icons/ai";
import { RiStopFill } from "react-icons/ri";
import styled, { keyframes } from "styled-components";
import { useSpinner } from "../../hook/useSpinner";
import { ITheme } from "../../type/types";

const SpeechBar = () => {
  const { isSpinning, handleMouseDown, handleMouseUp} = useSpinner()
  const setTodo = useSetRecoilState(todoAtom)
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(()=> {
    setTodo(transcript)
  },[transcript, setTodo])

  const resetToDoInput = () => {
    resetTranscript()
    setTodo('')
  }


  if (!browserSupportsSpeechRecognition) {
    return <SpeechWrapper>Browser doesn't support speech recognition.</SpeechWrapper>;
  }



  return (
    <SpeechWrapper>
      <IconContainer>
      {
        listening ?  
        <IconWrapper onClick={SpeechRecognition.stopListening}>
          <RiStopFill /> 
          <DescribeIcon>stop</DescribeIcon>
        </IconWrapper>
        : 
        <IconWrapper onClick={()=>SpeechRecognition.startListening()} >
          <AiFillCaretRight />
          <DescribeIcon>Play</DescribeIcon>
        </IconWrapper>
        
      }
      <IconWrapper onClick={resetToDoInput}  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} isSpinning={isSpinning}>
      <AiOutlineRedo id="reset">Reset</AiOutlineRedo>
      <DescribeIcon>reset</DescribeIcon>
      </IconWrapper>
      </IconContainer>
    </SpeechWrapper>
  );
};

interface IsSpinning {
  isSpinning  ?: boolean;
  theme : ITheme;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpeechWrapper = styled.div`
  margin-left: auto;
  transition: all ease 5s;
`
const IconContainer = styled.div`
  display:flex;
  flex-direction: row;
`
const DescribeIcon = styled.div`
  font-size: 2rem;
`
const IconWrapper = styled.div<IsSpinning>`
cursor : pointer;
svg{
  fill :${(props : IsSpinning)=>props.theme.theme === 'light' ? 'var(--color-blue)': 'var(--color-green)' }
  }
#reset{
  animation: ${rotate} 0.01s linear infinite;
  animation-play-state: ${({ isSpinning }) => (isSpinning ? 'running' : 'paused')};
  }
`

export default SpeechBar;
