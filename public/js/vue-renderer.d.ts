import { AllowedComponentProps } from 'vue';
import { Component } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { ComputedOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DataSource } from '@knxcloud/lowcode-data-source';
import { DefineComponent } from 'vue';
import { DesignMode } from '@knxcloud/lowcode-hooks';
import type { ExtractDefaultPropTypes } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Fragment } from 'vue';
import { INode } from '@knxcloud/lowcode-hooks';
import { IPublicTypeContainerSchema } from '@alilc/lowcode-types';
import type { IPublicTypeI18nData } from '@alilc/lowcode-types';
import type { IPublicTypeJSExpression } from '@alilc/lowcode-types';
import type { IPublicTypeJSFunction } from '@alilc/lowcode-types';
import type { IPublicTypeNodeData } from '@alilc/lowcode-types';
import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types';
import { MethodOptions } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import type { RequestHandler } from '@alilc/lowcode-types';
import type { Router } from 'vue-router';
import { Slot } from 'vue';
import { Slots } from 'vue';
import { VNode } from 'vue';
import { VNodeChild } from 'vue';
import { VNodeProps } from 'vue';

export declare const baseRendererPropKeys: ("__scope" | "__locale" | ("__parser" | "__schema" | "__appHelper" | "__designMode" | "__components" | "__messages" | "__getNode" | "__triggerCompGetCtx" | "__thisRequiredInJSE" | "__requestHandlersMap" | "__props"))[];

export declare interface BlockScope {
    [x: string | symbol]: unknown;
}

export declare const cleanCacledModules: () => void;

export declare class Config {
    private renderers;
    private configProvider;
    setConfigProvider(comp: any): void;
    getConfigProvider(): any;
    setRenderers(renderers: RendererModules): void;
    getRenderers(): RendererModules;
}

export declare const config: Config;

export declare type ExtractPublicPropTypes<T> = Omit<ExtractPropTypes<T>, keyof ExtractDefaultPropTypes<T>> & Partial<ExtractDefaultPropTypes<T>>;

export declare type I18nMessages = {
    [locale: string]: Record<string, string>;
};

export declare type LeafComponent = DefineComponent<LeafProps, any, any>;

export declare const leafPropKeys: ("__scope" | "__comp" | ("__schema" | "__vnodeProps" | "__isRootNode"))[];

export declare type LeafProps = ExtractPropTypes<typeof leafProps>;

export declare const leafProps: {
    readonly __comp: null;
    readonly __scope: null;
    readonly __schema: {
        readonly type: PropType<IPublicTypeNodeSchema>;
        readonly default: () => {};
    };
    readonly __vnodeProps: {
        readonly type: PropType<Record<string, unknown>>;
        readonly default: () => {};
    };
    readonly __isRootNode: BooleanConstructor;
};

export declare const LOWCODE_ROUTE_META: unique symbol;

export declare type MaybeArray<T> = T | T[];

export declare function mergeScope(scope: RuntimeScope, ...blockScope: MaybeArray<BlockScope | undefined | null>[]): RuntimeScope;

export declare function mergeScope(...blockScope: MaybeArray<BlockScope | undefined | null>[]): BlockScope;

declare type RenderComponent = (nodeSchema: IPublicTypeNodeData, scope: RuntimeScope, comp?: Component | typeof Fragment) => VNode | VNode[] | null;

export declare type RendererComponent = DefineComponent<RendererProps, any, any>;

export declare type RendererModules = Record<string, RendererComponent>;

export declare type RendererProps = ExtractPropTypes<typeof rendererProps>;

export declare const rendererProps: {
    readonly __scope: {
        readonly type: PropType<BlockScope>;
        readonly default: undefined;
    };
    readonly __schema: {
        readonly type: PropType<IPublicTypeContainerSchema>;
        readonly required: true;
    };
    readonly __appHelper: {
        readonly type: PropType<Record<string, unknown>>;
        readonly default: () => {};
    };
    readonly __designMode: {
        readonly type: PropType<"live" | "design">;
        readonly default: "live";
    };
    readonly __components: {
        readonly type: PropType<Record<string, Component<any, any, any, ComputedOptions, MethodOptions>>>;
        readonly required: true;
    };
    readonly __locale: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly __messages: {
        readonly type: PropType<I18nMessages>;
        readonly default: () => {};
    };
    readonly __getNode: {
        readonly type: PropType<(id: string) => INode | null>;
        readonly required: true;
    };
    readonly __triggerCompGetCtx: {
        readonly type: PropType<(schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void>;
        readonly required: true;
    };
    readonly __thisRequiredInJSE: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly __requestHandlersMap: {
        readonly type: PropType<Record<string, RequestHandler<unknown>>>;
        readonly default: () => {};
    };
    readonly __props: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly __parser: {
        readonly type: PropType<SchemaParser>;
        readonly required: true;
    };
};

export declare interface RuntimeScope extends BlockScope, ComponentPublicInstance {
    i18n(key: string, values: any): string;
    currentLocale: string;
    dataSourceMap: Record<string, DataSource>;
    reloadDataSource(): Promise<any[]>;
    __parser: SchemaParser;
    __thisRequired: boolean;
    __loopScope?: boolean;
    __loopRefIndex?: number;
    __loopRefOffset?: number;
}

export declare class SchemaParser {
    static cacheModules: Record<string, object>;
    static cleanCachedModules(): void;
    private createFunction;
    private exports;
    constructor(options?: SchemaParserOptions);
    initModule(schema: IPublicTypeContainerSchema): this;
    parseSlotScope(args: unknown[], params: string[]): BlockScope;
    parseI18n(i18nInfo: IPublicTypeI18nData, scope?: RuntimeScope | boolean): string | undefined;
    parseSchema(schema: IPublicTypeI18nData, scope?: RuntimeScope | boolean): string | undefined;
    parseSchema(schema: IPublicTypeJSFunction, scope?: RuntimeScope | boolean): CallableFunction;
    parseSchema(schema: IPublicTypeJSExpression, scope?: RuntimeScope | boolean): unknown;
    parseSchema<T extends object>(schema: T, scope: RuntimeScope | boolean): {
        [K in keyof T]: T[K] extends IPublicTypeI18nData ? string : T[K] extends IPublicTypeJSFunction ? CallableFunction : T[K] extends IPublicTypeJSExpression ? unknown : T[K] extends IPublicTypeJSExpression | IPublicTypeJSFunction ? CallableFunction | unknown : T[K];
    };
    parseSchema<T>(schema: unknown, scope?: RuntimeScope | boolean): T;
    parseOnlyJsValue<T>(schema: unknown): T;
    parseOnlyJsValue(schema: unknown): unknown;
    parseExpression(str: IPublicTypeJSFunction, scope?: RuntimeScope | boolean): CallableFunction;
    parseExpression(str: IPublicTypeJSExpression, scope?: RuntimeScope | boolean): unknown;
    parseExpression(str: IPublicTypeJSExpression | IPublicTypeJSFunction, scope?: RuntimeScope | boolean): CallableFunction | unknown;
}

export declare interface SchemaParserOptions {
    thisRequired?: boolean;
}

export declare function setupLowCodeRouteGuard(router: Router, options?: SetupLowCodeRouteGuardOptions): (() => void) | undefined;

export declare interface SetupLowCodeRouteGuardOptions extends SchemaParserOptions {
    /**
     * @default 'runtimeScope'
     */
    scopePath?: string;
    /**
     * 等待异步 setup 以及 init dataSource 的超时时间，默认为 1 分钟
     * @default 60000 ms
     */
    timeout?: number;
}

export declare type SlotSchemaMap = {
    [x: string]: unknown;
};

export declare function useLeaf(leafProps: LeafProps, onChildShowChange?: (schema: IPublicTypeNodeSchema, show: boolean) => void): {
    node: INode | null;
    locked: Ref<boolean>;
    isRootNode: boolean;
    getNode: (id: string) => INode | null;
    renderComp: RenderComponent;
    buildProps: (propsSchema: Record<string, unknown>, scope: RuntimeScope, node?: INode | null, blockScope?: BlockScope | null, extraProps?: Record<string, unknown>) => any;
    buildSlots: (slots: SlotSchemaMap, scope: RuntimeScope, node?: INode | null) => Slots;
};

export declare function useRenderer(rendererProps: RendererProps, scope: RuntimeScope): {
    node: INode | null;
    locked: Ref<boolean>;
    isRootNode: boolean;
    getNode: (id: string) => INode | null;
    renderComp: RenderComponent;
    buildProps: (propsSchema: Record<string, unknown>, scope: RuntimeScope, node?: INode | null | undefined, blockScope?: BlockScope | null | undefined, extraProps?: Record<string, unknown> | undefined) => any;
    buildSlots: (slots: SlotSchemaMap, scope: RuntimeScope, node?: INode | null | undefined) => Readonly<{
        [name: string]: Slot | undefined;
    }>;
    scope: RuntimeScope;
    schemaRef: ComputedRef<IPublicTypeContainerSchema>;
    designModeRef: ComputedRef<"live" | "design">;
    componentsRef: ComputedRef<Record<string, Component<any, any, any, ComputedOptions, MethodOptions>>>;
};

export declare function useRootScope(rendererProps: RendererProps, setupConext: object): {
    scope: RuntimeScope;
    wrapRender: (render: () => VNodeChild | null) => (() => VNodeChild | null) | Promise<() => VNodeChild | null>;
};

declare const VueRenderer: DefineComponent<    {
readonly scope: PropType<BlockScope>;
readonly schema: {
readonly type: PropType<IPublicTypeContainerSchema>;
readonly required: true;
};
readonly passProps: PropType<Record<string, unknown>>;
readonly components: {
readonly type: PropType<Record<string, Component<any, any, any, ComputedOptions, MethodOptions>>>;
readonly required: true;
};
/** 设计模式，可选值：live、design */
readonly designMode: {
readonly type: PropType<DesignMode>;
readonly default: "live";
};
/** 设备信息 */
readonly device: StringConstructor;
/** 语言 */
readonly locale: StringConstructor;
readonly messages: {
readonly type: PropType<I18nMessages>;
readonly default: () => {};
};
readonly getNode: PropType<(id: string) => INode | null>;
/** 组件获取 ref 时触发的钩子 */
readonly onCompGetCtx: PropType<(schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void>;
readonly thisRequiredInJSE: {
readonly type: BooleanConstructor;
readonly default: true;
};
readonly disableCompMock: {
readonly type: PropType<boolean | string[]>;
readonly default: false;
};
readonly appHelper: ObjectConstructor;
readonly requestHandlersMap: ObjectConstructor;
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | null, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
readonly scope: PropType<BlockScope>;
readonly schema: {
readonly type: PropType<IPublicTypeContainerSchema>;
readonly required: true;
};
readonly passProps: PropType<Record<string, unknown>>;
readonly components: {
readonly type: PropType<Record<string, Component<any, any, any, ComputedOptions, MethodOptions>>>;
readonly required: true;
};
/** 设计模式，可选值：live、design */
readonly designMode: {
readonly type: PropType<DesignMode>;
readonly default: "live";
};
/** 设备信息 */
readonly device: StringConstructor;
/** 语言 */
readonly locale: StringConstructor;
readonly messages: {
readonly type: PropType<I18nMessages>;
readonly default: () => {};
};
readonly getNode: PropType<(id: string) => INode | null>;
/** 组件获取 ref 时触发的钩子 */
readonly onCompGetCtx: PropType<(schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void>;
readonly thisRequiredInJSE: {
readonly type: BooleanConstructor;
readonly default: true;
};
readonly disableCompMock: {
readonly type: PropType<boolean | string[]>;
readonly default: false;
};
readonly appHelper: ObjectConstructor;
readonly requestHandlersMap: ObjectConstructor;
}>>, {
readonly designMode: DesignMode;
readonly thisRequiredInJSE: boolean;
readonly messages: I18nMessages;
readonly disableCompMock: boolean | string[];
}>;
export default VueRenderer;

export declare type VueRendererProps = ExtractPublicPropTypes<typeof vueRendererProps>;

export declare const vueRendererProps: {
    readonly scope: PropType<BlockScope>;
    readonly schema: {
        readonly type: PropType<IPublicTypeContainerSchema>;
        readonly required: true;
    };
    readonly passProps: PropType<Record<string, unknown>>;
    readonly components: {
        readonly type: PropType<Record<string, Component<any, any, any, ComputedOptions, MethodOptions>>>;
        readonly required: true;
    };
    /** 设计模式，可选值：live、design */
    readonly designMode: {
        readonly type: PropType<DesignMode>;
        readonly default: "live";
    };
    /** 设备信息 */
    readonly device: StringConstructor;
    /** 语言 */
    readonly locale: StringConstructor;
    readonly messages: {
        readonly type: PropType<I18nMessages>;
        readonly default: () => {};
    };
    readonly getNode: PropType<(id: string) => INode | null>;
    /** 组件获取 ref 时触发的钩子 */
    readonly onCompGetCtx: PropType<(schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void>;
    readonly thisRequiredInJSE: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disableCompMock: {
        readonly type: PropType<boolean | string[]>;
        readonly default: false;
    };
    readonly appHelper: ObjectConstructor;
    readonly requestHandlersMap: ObjectConstructor;
};

export { }
