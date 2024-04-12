import {
  ButtonItem,
  definePlugin,
  DialogButton,
  Navigation,
  PanelSection,
  PanelSectionRow,
  ServerAPI,
  staticClasses,
  Header,
  Body,
  Title,
  Subtitle,
  NavigationMenu,
  NavigationMenuItem,
  CustomMask,
  CustomOverlay,
  CustomView,
  ImageBox,
  ImageIcon,
  MusicIcon,
  HeartIcon,
  ShuffleIcon,
  RepeatIcon,
  PlayIcon,
  ListMusicIcon,
  TrainTrackIcon,
  ProgressBar,
  FlexLayout,
  SpacingBox,
  Box,
  Text,
} from "decky-frontend-lib";
import { VFC } from "react";
import { FaSpotify } from "react-icons/fa";

import logo from "../assets/logo.png";

const Content: VFC<{ serverAPI: ServerAPI }> = () => {
  return (
    <PanelSection title="Panel Section">
      <PanelSectionRow>
        <CustomOverlay>
        <CustomMask />
        <CustomView className="bg-deckPurple-800 p-6 rounded-tl-3xl w-[300px]">
            <Header>
            <FlexLayout spacing="spacingNormal">
                <Title>DeckFy</Title>
                <ImageIcon src="./icons/microscope.png" />
            </FlexLayout>
            </Header>
                    <Body>
                        <FlexLayout vertical spacing="spacingNormal">
                            <FlexLayout spacing="spacingNormal">
                                <Subtitle>Tus Playlists</Subtitle>
                                <NavigationMenu>
                                    <NavigationMenuItem>Все</NavigationMenuItem>
                                </NavigationMenu>
                            </FlexLayout>
                            <FlexLayout spacing="spacingNormal">
                                <ImageBox
                                    alt="Album cover"
                                    className="rounded-md"
                                    height={80}
                                    width={80}
                                    src="./placeholder.svg"
                                />
                                <ImageBox
                                    alt="Album cover"
                                    className="rounded-md"
                                    height={80}
                                    width={80}
                                    src="./placeholder.svg"
                                />
                                <ImageBox
                                    alt="Album cover"
                                    className="rounded-md"
                                    height={80}
                                    width={80}
                                    src="./placeholder.svg"
                                />
                            </FlexLayout>
                            <FlexLayout spacing="spacingNormal">
                                <Subtitle>Избранное</Subtitle>
                                <NavigationMenu>
                                    <NavigationMenuItem>Все</NavigationMenuItem>
                                </NavigationMenu>
                            </FlexLayout>
                            <Box>
                                <FlexLayout vertical spacing="spacingNormal">
                                    <FlexLayout spacing="spacingNormal">
                                        <MusicIcon />
                                        <FlexLayout vertical>
                                            <Text>Цифры (feat. Rodionis)</Text>
                                            <Subtitle>Скриптонит, Индаблэк & qurt</Subtitle>
                                        </FlexLayout>
                                        <SpacingBox />
                                        <Text>3:02</Text>
                                    </FlexLayout>
                                    <FlexLayout spacing="spacingNormal">
                                        <MusicIcon />
                                        <FlexLayout vertical>
                                            <Text>Astronaut In The Ocean</Text>
                                            <Subtitle>Masked Wolf</Subtitle>
                                        </FlexLayout>
                                        <SpacingBox />
                                        <Text>3:09</Text>
                                    </FlexLayout>
                                    <FlexLayout spacing="spacingNormal">
                                        <MusicIcon />
                                        <FlexLayout vertical>
                                            <Text>Pressure feat. Tove Lo</Text>
                                            <Subtitle>Martin Garrix</Subtitle>
                                        </FlexLayout>
                                        <SpacingBox />
                                        <Text>3:18</Text>
                                    </FlexLayout>
                                    <FlexLayout spacing="spacingNormal">
                                        <MusicIcon />
                                        <FlexLayout vertical>
                                            <Text>California Roll</Text>
                                            <Subtitle>Snoop Dogg ft. Stevie Wonder, Pharrell Williams</Subtitle>
                                        </FlexLayout>
                                        <SpacingBox />
                                        <Text>4:10</Text>
                                    </FlexLayout>
                                </FlexLayout>
                            </Box>
                            <Box className="bg-deckGray-700 p-6 rounded-lg">
                                <FlexLayout spacing="spacingNormal">
                                    <ImageBox
                                        alt="Album cover"
                                        className="rounded-md"
                                        height={80}
                                        width={80}
                                        src="./placeholder.svg"
                                    />
                                    <FlexLayout vertical>
                                        <Text>Цифры (feat. Rodionis)</Text>
                                        <Subtitle>Скриптонит, Индаблэк & qurt</Subtitle>
                                    </FlexLayout>
                                    <FlexLayout spacing="spacingNormal">
                                        <TrainTrackIcon />
                                        <PlayIcon size={24} />
                                        <ListMusicIcon />
                                    </FlexLayout>
                                </FlexLayout>
                                <FlexLayout spacing="spacingNormal">
                                    <Text>2:16</Text>
                                    <ProgressBar
                                        value={0.5}
                                        className="flex-1 mx-4 bg-deckGray-600 rounded-full"
                                        progressClassName="bg-deckGreen-500 h-1 rounded-full"
                                    />
                                    <Text>3:02</Text>
                                </FlexLayout>
                                <FlexLayout spacing="spacingNormal" className="mt-4 text-deckGray-400">
                                    <ShuffleIcon />
                                    <RepeatIcon />
                                    <HeartIcon className="text-deckGreen-500" />
                                    <ListMusicIcon />
                                </FlexLayout>
                            </Box>
                        </FlexLayout>
                    </Body>
        </CustomView>
    </CustomOverlay>
      </PanelSectionRow>

      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => {
            Navigation.CloseSideMenus();
            Navigation.Navigate("/decky-plugin-test");
          }}
        >
          Router
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};

const DeckyPluginRouterTest: VFC = () => {
  return (
    <div>
      Hello World!
      <DialogButton onClick={() => Navigation.NavigateToLibraryTab()}>
        Go to Library
      </DialogButton>
    </div>
  );
};

export default definePlugin((serverApi: ServerAPI) => {
  serverApi.routerHook.addRoute("/decky-plugin-test", DeckyPluginRouterTest, {
    exact: true,
  });

  return {
    title: <div className={staticClasses.Title}>DeckFy</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaSpotify />,
    onDismount() {
      serverApi.routerHook.removeRoute("/decky-plugin-test");
    },
  };
});
